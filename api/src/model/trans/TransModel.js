import TransSchema from "./TransSchema.js"

//register
export const crateTransaction = (userObj)=> {
    return TransSchema(userObj).save()
}

// login
export const getTransById = (userId)=> {
    return TransSchema.find({userId})
}

//delete

export const deleteTransaction = (_id) => {
    return TransSchema.findByIdAndDelete(_id)
}