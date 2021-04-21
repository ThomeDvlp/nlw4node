import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UsersRepository";

class UserController {
	async create(request: Request, response: Response){
		const {name, email } = request.body;

		const userRepository = getCustomRepository(UserRepository);

		const userAlredyExists = await userRepository.findOne({ email });
		if (userAlredyExists) {
			return response.status(400).json({
				error: 'User already exists!'
			});
		}

		const user = userRepository.create({
			name, email
		})
		
		await userRepository.save(user);

		return response.json(user);
	}
}

export { UserController };
