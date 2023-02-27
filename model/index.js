// database configuration
import db from '../config/index.js'
// bcrypt module
import {hash, compare, hashSync, genSaltSync} from 'bcrypt'
// middleware for creating a token
import createToken from '../middleware/AuthenticateClient.js'
// const createToken = createTokenModule

// create a Client class
export class Client {
    // log in
    login(req, res){
        const {email, client_password} = req.body;
        const qryStr = `
            SELECT client_id, first_name, last_name, id_number, cellphone, email, client_password, user_role, profile_img
            FROM Clients
            WHERE email = '${email}';
        `;
        db.query(qryStr, async (err, data) => {
            console.log(data);
            if (err) throw err;
            if ((!data.length) || (data == null)) {
                res.status(401).json({
                    err: 'Incorrect email address.'
                })
            }
            else {
                await compare(client_password, data[0].client_password, (_err, _result) => {
                    if (_err) throw _err;
                    // create a jw token
                    const jwToken = createToken({
                        email, client_password
                    });

                    // saving 
                    res.cookie('LegitClient', jwToken, {
                        maxAge: 3600000,
                        httpOnly: true
                    });

                    if(_result) {
                        res.status(200).json({
                            msg: 'Logged in',
                            jwToken,
                            result: data[0]
                        });
                    }
                    else {
                        res.status(401).json({
                            err: 'You entered an invalid password or did not register.'
                        })
                    };
                })
            }
        });
    }

    // fetch Clients
    fetchClients(req, res){
        const qryStr = `
        SELECT client_id, first_name, last_name, id_number, cellphone, client_password, email, user_role, profile_img
        FROM Clients;
        `;

        db.query(qryStr, (err, data) => {
            if (err) throw err;
            res.status(200).json({
                results: data
            });
        });
    }

    // fetch Clients
    fetchClient(req, res){
        const qryStr = `
        SELECT client_id, first_name, client_password, last_name, id_number, cellphone, email, user_role, profile_img
        FROM Clients
        WHERE client_id = ?;
        `;

        db.query(qryStr, [req.params.id], (err, data) => {
            if (err) throw err;
            res.status(200).json({
                results: data
            });
        });
    }

    // create a Client
    async createClient(req, res) {
        // payload: data from the user
        let detail = req.body;
        console.log(detail);

        // hashing the password
        let salt = genSaltSync(15); 
        console.log(detail.client_password);
        detail.client_password = await hash(detail.client_password, salt);

        // this information will be used for client authentication
        let client = {
            emailAddress: detail.email,
            clientPassword: detail.client_password
        }

        // sql query
        const qryStr = 'INSERT INTO Clients SET ?;';
        db.query(qryStr, [detail], err => {
            if (err) {
                res.status(401).json({err});
                return;
            }
            const jwToken = createToken(client);
            // This token will be saved in the cookie.
            // duration in milliseconds
            res.cookie('LegitClient', jwToken, {
                maxAge: 3600000,
                httpOnly: true
            });
            res.status(200).json({msg: 'Client record is saved.'});
        }) 
    }

    // update client details
    updateClient(req, res) {
        let data = req.body;
        if( (data.client_password !== null) || (data.client_password !== undefined)){
            data.client_password = hashSync(data.client_password, 15);
        }
        const qryStr = `
            UPDATE Clients
            SET ?
            WHERE client_id = ?;`

        db.query(qryStr, [data, req.params.id], (err) => {
            if (err) throw err;
            res.status(200).json({
                msg: "Client record has been updated."
            });
        });
    }
    
    // delete a client record
    deleteClient(req, res) {
        const qryStr = `
            DELETE FROM Clients
            WHERE client_id = ?;`
    
        db.query(qryStr, [req.params.id], (err) => {
            if (err) throw err;
            res.status(200).json({
                msg: 'Client record has been removed successfully.'
            });
        });  
    }
}
// export default Client
















