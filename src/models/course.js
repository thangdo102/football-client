const url = process.env.API_URL || "http://localhost:9000";

export default class Course {
  static async listCourses() {
    const res = await fetch(`${url}/course`);
    return res.json();
  }
}
