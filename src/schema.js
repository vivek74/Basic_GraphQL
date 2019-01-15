import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';
import Medicine from './models/Medicine';

const typeDefs =`
type Medicine {
    medicineId: String,
	MedicineImage1: String,
	MedicineImage2: String,
	MedicineImage3: String,
	MedicineImage4: String,
    medicineName: String,
}
type Query {
    allMedicines:[Medicine]
}
`
export default makeExecutableSchema({
    typeDefs,
    resolvers
})
