/** 필수 요구사항
필요한 데이터를 모두 모델링한다.
사용되는 모든 함수를 선언부만 만든다.
함수 및 클래스의 내부는 구현하지 않습니다.
JSDoc을 활용해 문서화한다.
GitHub Page를 활용해 JSDoc 정적 페이지를 배포한다.

READ
모든 할 일을 조회할 수 있다.
ID를 기반으로 특정 할 일을 조회할 수 있다.

UPDATE
ID를 제외한 모든 속성을 수정할 수 있다.
특정 할 일의 특정 태그를 수정할 수 있다.

DELETE
ID를 기반으로 특정 할 일을 삭제할 수 있다.
모든 할 일을 제거할 수 있다.
특정 할 일의 특정 태그를 삭제할 수 있다.
특정 할 일의 모든 태그를 제거할 수 있다.


/**
 *
 * @typedef {Object} Todo
 * @property {number} id - 아이디
 * @property {string} content - 내용
 * @property {boolean} complete - 완료여부
 * @property {string} category - 카테고리
 * @property {Array.<string>} tags - 태그들(optional)
 */

/** @function CREATE
 * @description 할 일을 추가할 수 있다.
 * @param {string} content - 내용
 * @param {string} category - 카테고리
 * @property {Array.<string>} tags - 태그들(optional)
 * @todo 내용없이 추가할 수 없다.
 * @returns Todo
 */
function CREATE(content, category, tags) {
  // DO IT ...
  return;
}

/** @function READ
 * @description 모든 할 일을 조회할 수 있다.
 * @param {number} id - 아이디
 * @todo ID를 기반으로 특정 할 일을 조회할 수 있다.
 * @returns Todo | todos
 */
function READ(id) {
  // DO IT...
  return;
}

/** @function UPDATE
 * @description ID를 제외한 모든 속성을 수정할 수 있다.
 * @param {string} content - 내용
 * @property {boolean} complete - 완료여부
 * @param {string} category - 카테고리
 * @param {Array.<string>} tags - 태그들(optional)
 * @todo 특정 할 일의 특정 태그를 수정할 수 있다.
 */

function updateTodo(content, complete, category, tags) {
  // DO IT...
}

/** @function DELETE
 * @description ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * @param {number} id - 삭제할 todo ID
 * @todo 모든 할 일을 제거할 수 있다.
 * @todo 특정 할 일의 특정 태그를 삭제할 수 있다.
 * @todo 특정 할 일의 모든 태그를 제거할 수 있다.
 */
function deleteTodo(id) {
  // DO IT...
}
