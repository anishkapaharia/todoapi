'use strict';

exports.todosDELETE = function(args, res, next) {
  /**
   * This will delete the task from the database
   * This will delete the task from the database
   *
   * uid BigDecimal User's id of whoes todo is to be updated
   * id BigDecimal Task's id of whoes todos are to be extracted
   * no response value expected for this operation
   **/
  res.end();
}

exports.todosGET = function(args, res, next) {
  /**
   * Gets all the `todo` object array of `user` from the database
   *
   * uid BigDecimal User's id of whoes todos are to be extracted
   * returns TaskArray
   **/
  var examples = {};
  examples['application/json'] = "";
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.todosPOST = function(args, res, next) {
  /**
   * Post the task submitted by the user
   * It will add the `task` on the data base
   *
   * uid BigDecimal User's id of whoes todos are to be added
   * task TaskObject Task object
   * no response value expected for this operation
   **/
  res.end();
}

exports.todosPUT = function(args, res, next) {
  /**
   * Updates only `task` title or/and description of the given task id
   * Updates `task` title or/and description to the data base
   *
   * uid BigDecimal User's id of whoes todo is to be updated
   * id BigDecimal Task's id of whoes todos are to be extracted
   * title String Title that is to be edited (optional)
   * description String Description that is to be edited (optional)
   * no response value expected for this operation
   **/
  res.end();
}

