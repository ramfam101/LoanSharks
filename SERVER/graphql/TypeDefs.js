const {gql} = require('apollo-server');

module.exports=gql`
    type Car{
        id: ID!
        carMake: String!
        carModel: String!
        carColor: String!
        carMileage: Int!
        carYear: Int!
        carType: String!
        carMaxMilesPerDay: Int!
        carMileCostAfterMax: Int!
        carCostPerDay: Float!
        carLocation: String!
        carStatus: String!
        carReservations: [Int]!
        carIMGstring: String!
    }
    type Query{
        getCars: [Car]
        getCar(car_id: ID!): Car!
        getUsers: [User]
        getUser(user_id: ID!): User!
        getUserEmail(user_email: String!): User!
    }
    type Mutation{
        createCar(
        make: String!
        model: String!
        color: String!
        mileage: Int!
        year: Int!
        type: String!
        maxmilesperday: Int!
        milecostaftermax: Int!
        costperday: Float!
        location: String!
        status: String!
        reservations: [Int]!
        carIMGstring: String!
        carKey: String!
        ): Car!
        deleteCar(car_id: ID!): [Car]!


        register(registerInput: RegisterInput): User
        login(username: String, password: String): User

        UpdateInfo(input: UpdateInput!): User
    }
    input RegisterInput{
        firstName: String!
        lastName: String!
        password: String!
        confirmPassword: String!
        email: String!
    }

    input UpdateInput{
        oldemail: String! 
        firstName: String! 
        lastName: String!
        email: String!
        password: String! 
        location:String
    }
    type User{
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
        password: String!
        createdAt: String!
        type: String!
        location: String

    }
    
`;