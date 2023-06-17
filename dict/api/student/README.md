# Student


## Operations

### deletestudent

```http
DELETE /DeleteStudent/{Id}
```

deletestudent

### getGetAllStudents

```http
GET /GetAllStudents
```

Getstudent

### getGetStudent

```http
GET /GetStudent/{Id}
```

get student

### studentcreated

```http
POST /StudentRegister
```

studentcreated

### updatestudent

```http
PUT /UpdateStudent/{Id}
```

Updatestudent

## Implementation

This is an example of the API implementation to use to update the actual API implementation
when the API structure has changed.

```typescript
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

async function updatestudent(id: string, request: Api.StudentUpdate): Promise<t.UpdatestudentResponse> {
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
```
