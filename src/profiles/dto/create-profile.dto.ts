import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { CreateLegalPersonDto } from "../../legal-persons/dto/create-legal-person.dto";
import { CreateNaturalPersonDto } from "../../natural-persons/dto/create-natural-person.dto";

export class CreateProfileDto {
    @IsNotEmpty()
    @ApiProperty()
    userId: number;
    @ApiProperty()
    legalPerson: CreateLegalPersonDto|null;
    @ApiProperty()
    naturalPerson: CreateNaturalPersonDto|null;
}