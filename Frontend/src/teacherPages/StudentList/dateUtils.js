export const isToday = (student) => {
    console.log(student)

    const today = new Date();
    let createDate = new Date(student.createdAt).toDateString();
    let todayDate = new Date().toDateString();
    if(createDate == todayDate && student.attendance == 0){
      return false
    }
    // return console.log(false)
    const someDate = new Date(student.updatedAt);
    return today.toDateString() === someDate.toDateString();
};
