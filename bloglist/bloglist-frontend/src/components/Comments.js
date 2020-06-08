import React from 'react'
import shortid from 'shortid'
import { Table } from 'react-bootstrap'
import CommentForm from './CommentForm'

const CommentTable = ({ blog }) => (
  <Table striped>
    <tbody>
      {blog.comments.map(c =>
        <tr key={shortid.generate()}>
          <td>{c}</td>
        </tr>
      )}
    </tbody>
  </Table>
)

const Comments = ({ blog }) => (
  <div>
    <h3>Comments</h3>
    <CommentForm blog={blog} />
    <CommentTable blog={blog} />
  </div>
)

export default Comments