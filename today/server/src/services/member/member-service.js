const getConnection = require('../../database/connection');
const MemberRepository = require('../../repositories/member/member-repo');
const bcrypt = require('bcrypt');

exports.registMember = (data) => {

  return new Promise( async (resolve, reject) => {

    const connection = getConnection();

    const hashPassword = await bcrypt.hash(data.password, 12);

    console.log(hashPassword);

    data.password = hashPassword;

    const results = MemberRepository.insertMember(connection, data);

    connection.end();

    resolve(results);
  });
};

exports.findId = (email) => {

  return new Promise((resolve, reject) => {
    
    const connection = getConnection();

    const results = MemberRepository.selectId(connection, email);

    connection.end();

    resolve(results);

  });
}


