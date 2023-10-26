import { faker } from '@faker-js/faker';

const getUser = (req, res) => {

	let newUser = [
		{
			id: faker.database.mongodbObjectId(),
			firstName: faker.person.firstName(),
			lastName: faker.person.lastName(),
			phone: faker.phone.number(),
			email: faker.internet.email(),
			password: faker.internet.password()
		}
	]
	console.log(newUser);

	res.json("Funciono");
}

const getCompanies = (req, res) => {

	let newCompanie = [
		{
			id: faker.database.mongodbObjectId(),
			name: faker.company.name(),
			direccion: {
				street: faker.location.street(),
				city: faker.location.city(),
				state: faker.location.state(),
				postalCode: faker.location.zipCode(),
				country: faker.location.country(),
			},
		}
	]
	console.log(newCompanie);

	res.json("Funcionó");
}

const getCompanyUsernew = (req, res) => {

	let newUser1 = [
		{
			id: faker.database.mongodbObjectId(),
			firstName: faker.person.firstName(),
			lastName: faker.person.lastName(),
			phone: faker.phone.number(),
			email: faker.internet.email(),
			password: faker.internet.password()
		}
	]

	let newCompanie1 = [
		{
			id: faker.database.mongodbObjectId(),
			name: faker.company.name(),
			direccion: {
				street: faker.location.street(),
				city: faker.location.city(),
				state: faker.location.state(),
				postalCode: faker.location.zipCode(),
				country: faker.location.country(),
			},
		}
	]

	console.log(newUser1, newCompanie1);

	res.json ("Lo hice")
}

export { getUser, getCompanies, getCompanyUsernew };