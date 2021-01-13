"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const typeorm_1 = require("typeorm");
const users_entity_1 = require("./users.entity");
const bcrypt = require("bcrypt");
const common_1 = require("@nestjs/common");
let UserRepository = class UserRepository extends typeorm_1.Repository {
    async signUp(signUpDto) {
        const { name, username, password } = signUpDto;
        const user = new users_entity_1.User();
        user.username = username;
        user.name = name;
        user.salt = await bcrypt.genSalt();
        user.password = await this.hashpassword(password, user.salt);
        try {
            await user.save();
        }
        catch (error) {
            if (error.code === 2305) {
                throw new common_1.ConflictException('Username Already Token.');
            }
            else {
                throw new common_1.InternalServerErrorException('Please Try Again !');
            }
        }
    }
    async getAllPosts() { }
    async validateUserPassword(signInDto) {
        const { username, password } = signInDto;
        const user = await this.findOne({ username });
        if (user && await user.validatePassword(password)) {
            return user.username;
        }
        else {
            return null;
        }
    }
    async hashpassword(password, salt) {
        return bcrypt.hash(password, salt);
    }
};
UserRepository = __decorate([
    typeorm_1.EntityRepository(users_entity_1.User)
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=User.repository.js.map