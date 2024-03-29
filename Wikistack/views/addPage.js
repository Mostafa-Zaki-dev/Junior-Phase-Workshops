const html = require('html-template-tag');
const layout = require('./layout');

module.exports = () =>
  layout(html`
    <h3>Add a Page</h3>
    <hr />
    <form method="POST" action="/wiki/">
      <div class="row">
        <label for="name" class="col-sm-2 control-label">Author Name</label>
        <div class="col-sm-2">
          <input id="name" name="name" type="text" class="form-control" placeholder=" Name"/>
        </div>
      </div>

      <div class="row">
        <label for="email" class="col-sm-2 control-label">Author Email</label>
        <div class="col-sm-4">
          <input id="email" name="email" type="email" class="form-control" placeholder=" Email" />
        </div>
      </div>

      <div class="row">
        <label for="title" class="col-sm-2 control-label">Page Title</label>
        <div class="col-sm-4">
          <input id="title" name="title" type="text" class="form-control" placeholder=" Title" />
        </div>
      </div>

      <div class="row">
        <label for="content" class="col-sm-2 control-label">Page Content</label>
        <div class="col-sm-10">
          <textarea id="content" name="content" class="form-control"  /> </textarea>
        </div>
      </div>

      <div class="row">
        <label for="status" class="col-sm-2 control-label">Page Status</label>
        <div class="col-sm-2">
          <input id="status" name="status" type="text" class="form-control" placeholder=" Status" />
        </div>
      </div>

      <div class="col-sm-offset-5 col-sm-10">
        <button type="submit" class="btn btn-primary">submit</button>
      </div>
    </form>
  `);
