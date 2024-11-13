import {data} from "../assets/data/data.js";

export const comentarService = {
    getComentar: async function () {
        try {
            const response = await fetch(data.api);
            return await response.json();
        } catch (error) {
            return {error: error && error.message};
        }
    },

    addComentar: async function ({id, name, status, konsumsi, message, date, color}) {
        const comentar = {
            id: id,
            name: name,
            status: status,
            konsumsi: konsumsi,
            message: message,
            date: date,
            color: color,
            replies : [], //menambahkan reply
        };

        try {
            const formData = new FormData();
            Object.keys(comentar).forEach(key => {
                const value=key === 'replies' ? JSON.stringify(comentar[key]) : comentar[key];
                formData.append(key, value);
            });

            const response = await fetch(data.api, {
                method: 'POST',
                body: formData
            });

            return await response.json();

        } catch (error) {
            console.error('Post error:', error);
            return {error: error.message};
        }
    },

    //menambahkan reply
    addReply: async function ({id, parentId, name, message, date, color}) {
        try {
            // First, get the current comment data
            const response = await this.getComentar();
            const comentar = response.comentar;
            
            // Find the parent comment
            const parentComment = comentar.find(comment => comment.id === parentId);
            if (!parentComment) {
                throw new Error('Parent comment not found');
            }

            // Create the reply object
            const reply = {
                id,
                nama,
                message,
                date,
                color
            };
            let replies = [];
            // Add reply to parent comment's replies array
            
            try {
                replies = parentComment ? JSON.parse(parentComment) : [];
            } catch (e) {
                console.error('Error parsing replies:', e);
                replies=[];
            }
            replies.push(reply);
            const FormData = new FormData();
            formData.append('action', 'updateReplies');
            formData.append('parrentId', parentId);
            formData.append('replies', JSON.stringify(replies));
            // Update the comment in the database
            const updateResponse = await fetch(data.api, {
                method: 'POST',
                body: formData
            });

            return await updateResponse.json();
        } catch (error) {
            console.error('Reply error:', error);
            return {error: error.message};
        }
    },
};