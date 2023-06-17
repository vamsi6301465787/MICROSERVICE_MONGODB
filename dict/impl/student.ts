import * as t from '../api/student/types'
import { Api } from '../models'

async function deletestudent(id: string): Promise<t.DeletestudentResponse> {
	throw 'Unimplemented'
}

async function getGetAllStudents(): Promise<t.GetGetAllStudentsResponse> {
	throw 'Unimplemented'
}

async function getGetStudent(id: string): Promise<t.GetGetStudentResponse> {
	throw 'Unimplemented'
}

async function studentcreated(request: Api.Student): Promise<t.StudentcreatedResponse> {
	throw 'Unimplemented'
}

async function updatestudent(id: string, request: Api.Student): Promise<t.UpdatestudentResponse> {
	throw 'Unimplemented'
}


const api: t.StudentApi = {
	deletestudent,
	getGetAllStudents,
	getGetStudent,
	studentcreated,
	updatestudent,
}

export default api
