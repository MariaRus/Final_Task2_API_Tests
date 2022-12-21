import superagent from "superagent"
import { expect } from "chai"

describe("Create API requests", () => {
    it("get: get all posts", async () => {
        const res = await superagent.get("https://jsonplaceholder.typicode.com/posts")
        expect(res.status).equal(200)
    });

    it("get: get a post", async () => {
        const res = await superagent.get("https://jsonplaceholder.typicode.com/posts/1")
        expect(res.status).equal(200)
    });

    it("get: get comments for a post", async () => {
        const res = await superagent.get("https://jsonplaceholder.typicode.com/posts/1/comments")
        expect(res.status).equal(200)
    });

    it("post: create a post", async () => {
        const res = await superagent
            .post("https://jsonplaceholder.typicode.com/posts")
            .set("Content-Type", "application/json")
            .send({
                title: "some title comes here",
                body: "some descriptions comes here as a body for a post",
            })
        expect(res.status).equal(201)
        expect(res.body.title).equal("some title comes here")
        expect(res.body.body).equal("some descriptions comes here as a body for a post")
    });

    it("post: create a comment", async () => {
        const res = await superagent
            .post("https://jsonplaceholder.typicode.com/posts/1/comments")
            .set("Content-Type", "application/json")
            .send({
                name: "some name for a comment",
                email: "some_email@gmail.com",
                body: "some body for a comment for post with id 1",
            })
        expect(res.status).equal(201)
        expect(res.body.name).equal("some name for a comment")
        expect(res.body.email).equal("some_email@gmail.com")
        expect(res.body.body).equal("some body for a comment for post with id 1")
    });

    it("patch: update title for a post", async () => {
        const res = await superagent
            .patch("https://jsonplaceholder.typicode.com/posts/1")
            .set("Content-Type", "application/json")
            .send({
                title: "new title",
            })
        expect(res.status).equal(200)
        expect(res.body.title).equal("new title")
    });

    it("patch: update email for a comment", async () => {
        const res = await superagent
            .patch("https://jsonplaceholder.typicode.com/comments/500")
            .set("Content-Type", "application/json")
            .send({
                email: "updated_email@gmail.com",
            })
        expect(res.status).equal(200)
        expect(res.body.email).equal("updated_email@gmail.com")
    });

    it("put: update a post", async () => {
        const res = await superagent
            .put("https://jsonplaceholder.typicode.com/posts/1")
            .set("Content-Type", "application/json")
            .send({
                title: "new updated title",
                body: "new updated body",
            })
        expect(res.status).equal(200)
        expect(res.body.title).equal("new updated title")
        expect(res.body.body).equal("new updated body")
    });

    it("put: update a comment", async () => {
        const res = await superagent
            .put("https://jsonplaceholder.typicode.com/comments/500")
            .set("Content-Type", "application/json")
            .send({
                name: "new updated name for a comment",
                email: "new_updated_email@gmail.com",
                body: "new updated body for a comment",
            })
        expect(res.status).equal(200)
        expect(res.body.name).equal("new updated name for a comment")
        expect(res.body.email).equal("new_updated_email@gmail.com")
        expect(res.body.body).equal("new updated body for a comment")
    });

    it("delete: delete a post", async () => {
        const res = await superagent.delete("https://jsonplaceholder.typicode.com/posts/1")
        expect(res.status).equal(200)
    });

    it("delete: delete a comment", async () => {
        const res = await superagent.delete("https://jsonplaceholder.typicode.com/comments/500")
        expect(res.status).equal(200)
    })

})