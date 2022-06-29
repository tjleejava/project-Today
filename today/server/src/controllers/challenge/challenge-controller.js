const HttpStatus = require('http-status');
const uuid = require('react-uuid');
const ChallengeService = require('../../services/challenge/challenge-service');
const RegistChallengeDTO = require('../../dto/challenge/challenge-regist-dto');

exports.registChallenge = async (req, res, next) => {

    console.log(req.body);
    const registChallenge = new RegistChallengeDTO(req.body);
    console.log('controller registChallenge : ', registChallenge);
    const result = await ChallengeService.registChallenge(registChallenge);

    console.log('controller result : ');
    console.log(result);
    console.log('controller result : ');
    return res.send(
        {
            result: result,
            url: 'http://localhost:3000'
        }
    );
};

exports.uploadFile = async (req, res, next) => {
  
    if( !req.files ) {
        return res.status(500).send({ msg: "file is not found" });
    } 

    const myFile = req.files.file;
    const uidname = uuid(myFile.name)
    
    myFile.mv(`${__dirname}/../../../public/images/challenge/${uidname}.png`, function (err) {
        if (err) {
            console.log(err)
        } else {
            
            const data = {
                originalName: myFile.name,
                savedName: uidname,
                savedPath: `${__dirname}/../../../public/images/challenge`
            }
            return res.send(data);
        }
    });
};

exports.findChallengeByNo = async (req, res, next) => {

    const challengeNo = req.params.challengeNo;
    const result = await ChallengeService.findChallengeByNo(challengeNo);

    console.log('controller result : ');
    console.log(result);
    console.log('controller result : ');
    
    return res.send(
        {
            result: result,
            url: 'http://localhost:3000'
        }
    );
}