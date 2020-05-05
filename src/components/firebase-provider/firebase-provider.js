import { useCallback, useState, useEffect } from 'react'
import firebase from 'gatsby-plugin-firebase'

// function useFirestoreDocData(initialize, deps) {
//   const db = firebase.firestore()

//   // never allow a new initializer function:
//   const init = useCallback(initialize, [])

//   // TODO: our init() method should handle errors and set pending state.

//   // eslint-disable-next-line
//   const ref = useMemo(() => init(db), [init, db].concat(deps || []))

//   const [data, setState] = useState()

//   useEffect(() => {
//     const unsub = ref.onSnapshot(snap => {
//       setState(snap.data())
//     })
//     // unsubscribe any time `ref` changes:
//     return unsub
//   }, [ref])

//   const error = undefined
//   const pending = data === undefined

//   return [data, error, pending]
// }

function useFirestoreCollectionData(initialize, deps) {
  // never allow a new initializer function:
  const init = useCallback(initialize, [])

  // TODO: our init() method should handle errors and set pending state.

  const [data, setState] = useState()
  useEffect(() => {
    const ref = init(firebase.firestore())
    const unsub = ref.onSnapshot((snap) => {
      const snapData = []

      snap.forEach(function (doc) {
        if (doc && doc.exists) {
          snapData.push({
            ...doc.data(),
            id: doc.id,
          })
        }
      })

      setState(snapData)
    })
    // unsubscribe any time `ref` changes:
    return unsub
  }, [init])

  const error = undefined
  const pending = data === undefined

  return [data, error, pending]
}

function useDeleteIssue() {
  const [error, setError] = useState(null)
  const [pending, setPending] = useState(false)

  const deleteIssue = useCallback((issueId) => {
    setPending(true)

    firebase
      .firestore()
      .collection('issues')
      .doc(issueId)
      .delete()
      .then(() => {
        setError('SUCCESS. doc deleted')
        setPending(false)
      })
      .catch((err) => {
        setError(`ERROR while deleting docId: ${issueId}. With error ${err}`)
        setPending(false)
      })
  }, [])

  return [deleteIssue, error, pending]
}

function useAddIssue() {
  const [error, setError] = useState(null)
  const [pending, setPending] = useState(false)

  const deleteIssue = useCallback(({ label, estimate }) => {
    setPending(true)

    const newIssue = {
      label,
      estimate,
      timestamp: Date.now(),
    }

    firebase
      .firestore()
      .collection('issues')
      .add({ ...newIssue })
      .then(() => {
        setError('SUCCESS. doc deleted')
        setPending(true)
      })
      .catch((err) => {
        setError(
          `ERROR while adding issue ${JSON.stringify(
            newIssue,
          )}. With error ${err}`,
        )
        setPending(true)
      })
  }, [])

  return [deleteIssue, error, pending]
}

export {
  // useFirestoreDocData,
  useFirestoreCollectionData,
  useDeleteIssue,
  useAddIssue,
}
