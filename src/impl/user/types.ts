
import { DeletEstudentResponse, GetstudentResponse,UpdatestudentResponse, StudentApi, StudentcreatedResponse } from "../../../dict/api/student/types";
import { Api } from "../../../dict/models";
import {collections} from '../../../src/admin/types'


export class studentApiImpl implements StudentApi {
    
    getstudent(): Promise<GetstudentResponse>  {
        return new Promise<GetstudentResponse>((resolve,reject)=>{
            collections.users!.find({}).toArray(function (err: any,result:any){
                if(err) {
                    const response=<GetstudentResponse>{
                        status: 400,
                       body:{message: `something went wrong`},
                    }
                    resolve(response)                   
                }
                const response=<GetstudentResponse>{
                    status:201,
                    body: result
                }
                resolve(response)    
            })  
        })   
    }

    deletEstudent(rollnumber:string):Promise<DeletEstudentResponse>{
    return new Promise<DeletEstudentResponse>((resolve,reject)=>{
        collections.users!.deleteOne(
            {rollnumber: rollnumber},
            function(err: any,result: any){
                if(err){
                    const response=<DeletEstudentResponse>{
                        status:400,
                        body:{message:`someting went wrong`}
                    }
                    resolve(response)
                }
                const response=<DeletEstudentResponse>{
                    status:201,
                    body:{
                        message:`delete User Sucessfully`
                    }
                }
                resolve(response)
            }
        )
        
    })
 }

 updatestudent(rollnumber: string, request: Api.BODYDATA | undefined) : Promise<UpdatestudentResponse>
 {
    return new Promise<UpdatestudentResponse>((resolve,reject)=>{
        collections.users!.updateOne(
            {rollnumber: rollnumber},
            {$set:request},
            function(err:any,result: any){
                if(err){
                    const response=<UpdatestudentResponse>{
                        status: 400,
                        body:{message:`Somting Went Wrong`}
                    }
                    resolve(response)
                }
                const response=<UpdatestudentResponse>{
                    status:201,
                    body:{message:`Update User Sucessfully`}
                }
                resolve(response)
               
            }    
        )

    })
 }


 studentcreated(request: Api.BODYDATA | undefined): Promise<StudentcreatedResponse>
 {
    return new Promise<UpdatestudentResponse>((resolve,reject)=>{
        collections.users!.findOne({rollnumber:request?.rollnumber},
            function(err:any,result:any){
                if(result){
                    const response=<UpdatestudentResponse>{
                        status:400,
                        body:{message:`User Already Created`}
                    }
                    resolve(response)
                }
                else{
                    collections.users!.insertOne(
                        {rollnumber:request?.rollnumber,fullname:request?.fullname,dob:request?.dob,phonenumber:request?.phonenumber,branch:request?.branch,email:request?.email},
                        function(err:any,result:any){
                          if(err){
                            const response=<UpdatestudentResponse>{
                                status:400,
                                body:{message:`Someting Went Wrong`}
                            }
                            resolve(response)
                          }
                          else{
                            const response=<UpdatestudentResponse>{
                                status:201,
                                body:{message:`Create User Sucessfuly`}
                            }
                            resolve(response)
                          }
                            
                        }

                    )
                }
            }
        )
    })
 }
}