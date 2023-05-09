import {collection, setDoc, doc, getDocs, query} from 'firebase/firestore'
import {auth, db} from '@config/firebase'
import {SportFirebase} from './interfaces'
import {SportFirebaseEnum} from './enums'

const historyLikeSportsCollection = collection(
  db,
  SportFirebaseEnum.HISTORY_LIKE_SPORTS
)

export const addSportLiked = async (
  sport: SportFirebase.ISportLiked
): Promise<void> => {
  try {
    const user = auth.currentUser
    if (!user) {
      throw new Error('User not found')
    }
    await setDoc(
      doc(
        historyLikeSportsCollection,
        user.uid,
        SportFirebaseEnum.SPORTS_LIKED,
        sport.id
      ),
      {sport}
    )
  } catch (e: any) {
    throw new Error(e)
  }
}

export const getSportsLiked = async (): Promise<
  SportFirebase.ISportLiked[]
> => {
  try {
    const user = auth.currentUser

    if (!user) {
      throw new Error('User not found')
    }
    const docRef = collection(
      db,
      SportFirebaseEnum.HISTORY_LIKE_SPORTS,
      user.uid,
      SportFirebaseEnum.SPORTS_LIKED
    )

    const queryCollection = query(docRef)

    const listLiked: SportFirebase.ISportLiked[] = []

    const snapshot = await getDocs(queryCollection)

    snapshot.forEach((docData) => {
      const data = docData.data()
      listLiked.push(data.sport as SportFirebase.ISportLiked)
    })

    return listLiked
  } catch (e: any) {
    throw new Error(e)
  }
}

export default addSportLiked
