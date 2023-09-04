
import { GetstudentResponse,StudentApi, StudentcreatedResponse } from "../../../dist/api/student/types";
import { Api } from "../../../dist/models";
import responses from "../user/respones/#responses.json" 
import {collections} from '../../../src/admin/types'

export class studentApiImpl implements StudentApi {


    getstudent(): Promise<GetstudentResponse>  {
        return new Promise<GetstudentResponse>((resolve,reject)=>{
            collections.users!.find({}).toArray(function(err:any,result:any){
                if(err) {
                    const response=<GetstudentResponse>responses.auth1[0]
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


 studentcreated(request: Api.Student): Promise<StudentcreatedResponse>
 {
    return new Promise<StudentcreatedResponse>((resolve,reject)=>{
        const studentDataRequest=request;
        collections.users!.findOne({username:request?.username}, 
            function(err:any,result:any){
                if(result){
                    const response=<StudentcreatedResponse>responses.post[0]
                    resolve(response)
                }
                else{
                    collections.users!.insertOne(
                        {...studentDataRequest},
                        function(err:any,result:any){
                          if(err){
                            const response=<StudentcreatedResponse>responses.auth1[0]
                            resolve(response)
                          }
                          else{
                            const response=<StudentcreatedResponse>responses.post[1]
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