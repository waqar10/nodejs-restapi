import BaseController from "../../utils/base-controller";
import student from "../../../db";

export default class UserController extends BaseController {
  constructor() {
    super();
  }
  async index(req, res) {
    const students = student.filters(items => items.age > 10);
    return res.json(students);
  }
  async create() {
    // Insert
  }
  async update() {}
  async remove() {}
}
