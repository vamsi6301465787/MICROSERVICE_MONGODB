import { studentApiImpl } from "./user/types";
import { ApiImplementation } from "../../dict/types";



export class serviceApiimpl implements ApiImplementation {
    student:studentApiImpl=new studentApiImpl
}
