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
willfinishHomeworkPromise().then((message)=>{
    console.log('Success: '+ message)
}).catch((error)=>{
    console.log(error.name + error.message)
})