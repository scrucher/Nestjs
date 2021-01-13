"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const passport_local_1 = require("passport-local");
const passport_jwt_1 = require("passport-jwt");
const User_repository_1 = require("./User.repository");
let JwtStrategy = class JwtStrategy extends passport_1.PassportStrategy(passport_local_1.Strategy, 'jwt') {
    constructor(userRepository) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secret: 'topsecret51',
        });
        this.userRepository = userRepository;
    }
    async validate(payload) {
        const { username } = payload;
        const user = await this.userRepository.findOne(username);
        if (!username) {
            throw new common_1.UnauthorizedException('Something Went Wrong, Please Try Again');
        }
        ;
        return user;
    }
};
JwtStrategy = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(User_repository_1.UserRepository)),
    __metadata("design:paramtypes", [User_repository_1.UserRepository])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;
//# sourceMappingURL=jwt.strategy.js.map