export const gender = ['male', 'female'];
export const bloodGroup = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export const facultySearchableFields = [
  'email',
  'contactNo',
  'emergencyContactNo',
  'name.firstName',
  'name.lastName',
  'name.middleName',
];

export const designation = ['Professor', 'Lecturer'];

export const facultyFilterableFields = [
  'searchTerm',
  'id',
  'gender',
  'bloodGroup',
  'email',
  'contactNo',
  'emergencyContactNo',
  'academicFaculty',
  'academicDepartment',
  'designation',
];

export const EVENT_FACULTY_UPDATED = 'faculty.updated';
export const EVENT_FACULTY_DELETE = 'faculty.deleted';
