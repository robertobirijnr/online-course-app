import { CREATE_COURSE } from "./Types";
export function createCourse(course) {
  return { type: CREATE_COURSE, course };
}
