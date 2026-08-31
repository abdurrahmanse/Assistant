export const mockCrudData = {
  employee: {
    list: {
      title: 'Enrolled Students',
      newButton: 'Add Student',
      searchPlaceholder: 'Search students by name or email...',
      columns: {
        id: 'Student ID',
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        department: 'Enrolled Course',
        role: 'Progress Status',
        status: 'Account Status',
        actions: 'Actions'
      }
    },
    create: {
      title: 'Enroll New Student',
      saveButton: 'Enroll',
      cancelButton: 'Cancel'
    },
    edit: {
      title: 'Edit Student Details',
      saveButton: 'Save Changes',
      cancelButton: 'Cancel',
      deleteButton: 'Remove Student'
    },
    show: {
      title: 'Student Profile',
      editButton: 'Edit Details',
      backButton: 'Back to List'
    }
  }
};
export type CrudMockData = typeof mockCrudData;
