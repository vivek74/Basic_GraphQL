import Medicine from './models/Medicine';
export const resolvers = {
    Query:{
        async allMedicines() {
            return await Medicine.find();
        }
    }
}