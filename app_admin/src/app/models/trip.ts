export interface Trip {
    _id: string, // Internal primary key in MongoDB
    code: string, // Unique code for the trip
    name: string, // Name of the trip
    length: string,
    start: Date,
    resort: string, // Resort associated with the trip
    perperson: string, // Person associated with the trip
    image: string, // Image URL for the trip
    description: string, // Description of the trip 
}
