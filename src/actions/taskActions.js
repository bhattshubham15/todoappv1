export const addTask = (task) => {
    return (dispatch, getState, { getFirebase }) => {
        const fireStore = getFirebase().firestore();
        const authorId = getState().firebase.auth.uid;
        fireStore.collection('tasks')
            .add({
                ...task,
                authorId: authorId,
                date: new Date()
            }).then(() => {
                dispatch({
                    type: 'ADD_TASK',
                    task
                });
            }).catch((err) => {
                dispatch({
                    type: 'ADD_TASK_ERR',
                    err
                })
            })
    }
}

export const removeTask = (task) => {
    return (dispatch, getState, { getFirebase }) => {
        const fireStore = getFirebase().firestore();
        fireStore.collection('tasks')
            .doc(task.id)
            .delete()
            .then(() => {
                dispatch({
                    type: 'REMOVE_TASK',
                    task
                });
            }).catch((err) => {
                dispatch({
                    type: 'REMOVE_TASK_ERR',
                    err
                })
            })
    }
}

export const toggleChecked = (task) => {
    return (dispatch, getState, { getFirebase }) => {
        const fireStore = getFirebase().firestore();
        fireStore.collection('tasks')
            .doc(task.id)
            .set({
                ...task,
                checked: !task.checked
            },
                { merge: true }
            ).then(() => {
                dispatch({
                    type: 'TOGGLE_CHECKED',
                    task
                });
            }).catch((err) => {
                dispatch({
                    type: 'TOGGLE_CHECK_ERR',
                    err
                })
            })
    }
}
