import TransSchema from "./TransSchema.js"

//register
export const crateTransaction = (userObj)=> {
    return TransSchema(userObj).save()
}

// login
export const getTransById = (filter)=> {
    return TransSchema.findOne(filter)
}