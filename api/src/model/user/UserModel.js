import UserSchema from "./UserSchema.js"

//register
export const createUser = (userObj)=> {
    return UserSchema(userObj).save()
}

// login
export const getSingleUser = (filter)=> {
    return UserSchema.find(filter)
}