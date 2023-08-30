const haveNotFinish = false
function willfinishHomeworkPromise() {
    return new Promise((resolve, reject) => {
        if (haveNotFinish) {
        reject({
            name: 'Have not finish',
            message: ':<'
        })
    } else {
        resolve ("Good Job!")
    }
})
}