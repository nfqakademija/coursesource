import React from 'react';
import hourglassImg from '../../../../Resources/img/Hourglass-128.png'
import checkImg from '../../../../Resources/img/check.png'

const AssignmentItem = ({isDone}) => (
  <div className="row">
    <div className="col-md-12">
      <div className="box box-widget">
        <div className="box-header with-border">
          <div className="user-block">
            <img className="img-circle" src={isDone? checkImg : hourglassImg} alt="Assignment image" />
            <span className="username">Symfony ND 2</span>
            <span className="description">Shared publicly - 7:30 PM Today</span>
          </div>
          {/* /.user-block */}
          <div className="box-tools">
            <button type="button" className="btn btn-box-tool" data-toggle="tooltip" data-original-title="Mark as read">
              <i className="fa fa-circle-o" /></button>
            <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
            </button>
            <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" /></button>
          </div>
          {/* /.box-tools */}
        </div>
        {/* /.box-header */}
        <div className="box-body">
          {/* post text */}
          <p>Far far away, behind the word mountains, far from the
            countries Vokalia and Consonantia, there live the blind
            texts. Separated they live in Bookmarksgrove right at</p>
          <p>the coast of the Semantics, a large language ocean.
            A small river named Duden flows by their place and supplies
            it with the necessary regelialia. It is a paradisematic
            country, in which roasted parts of sentences fly into
            your mouth.</p>
          {/* Attachment */}
          <div className="attachment-block clearfix">
            <img className="attachment-img" src="../dist/img/photo1.png" alt="Attachment Image" />
            <div className="attachment-pushed">
              <h4 className="attachment-heading"><a href="http://www.lipsum.com/">Lorem ipsum text generator</a></h4>
              <div className="attachment-text">
                Description about the attachment can be placed here.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry... <a href="#">more</a>
              </div>
              {/* /.attachment-text */}
            </div>
            {/* /.attachment-pushed */}
          </div>
          {/* /.attachment-block */}
          {/* Social sharing buttons */}
          <button type="button" className="btn btn-default btn-xs"><i className="fa fa-share" /> Upload</button>
          <span className="pull-right text-muted">2 comments</span>
        </div>
        {/* /.box-body */}
        <div className="box-footer box-comments">
          <div className="box-comment">
            {/* User image */}
            <img className="img-circle img-sm" src="../dist/img/user3-128x128.jpg" alt="User Image" />
            <div className="comment-text">
              <span className="username">
                Maria Gonzales
                <span className="text-muted pull-right">8:03 PM Today</span>
              </span>{/* /.username */}
              It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout.
            </div>
            {/* /.comment-text */}
          </div>
          <div className="box-comment">
            <img className="img-circle img-sm" src="../dist/img/user5-128x128.jpg" alt="User Image" />
            <div className="comment-text">
              <span className="username">
                Nora Havisham
                <span className="text-muted pull-right">8:03 PM Today</span>
              </span>
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable English.
            </div>
          </div>
        </div>
        <div className="box-footer">
          <form action="#" method="post">
            <img className="img-responsive img-circle img-sm" src="../dist/img/user4-128x128.jpg" alt="Alt Text" />
            {/* .img-push is used to add margin to elements next to floating images */}
            <div className="img-push">
              <input type="text" className="form-control input-sm" placeholder="Press enter to post comment" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
)

export default AssignmentItem;