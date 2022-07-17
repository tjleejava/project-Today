const HttpStatus = require('http-status');
const uuid = require('react-uuid');
const ChallengeService = require('../../services/challenge/challenge-service');
const RegistChallengeDTO = require('../../dto/challenge/challenge-regist-dto');

exports.modifyChallenge = async (req, res, next) => {

    const result = await ChallengeService.modifyChallenge(req.body);

    return res.send(
        {
            result: result,
            url: 'http://localhost:3000'
        }
    );
};

exports.registChallenge = async (req, res, next) => {

    const registChallenge = new RegistChallengeDTO(req.body);
    const result = await ChallengeService.registChallenge(registChallenge);

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
                savedPath: `/images/challenge`
            }
            return res.send(data);
        }
    });
};

exports.findRankings = async (req, res, next) => {

    const results = await ChallengeService.findRankings();

    res.send(results);
};

exports.checkChallengeAuthByMemberNo = async (req, res, next) => {

    console.log(JSON.parse(req.query.authInfo));
    const result = await ChallengeService.checkChallengeAuthByMemberNo(JSON.parse(req.query.authInfo));

    console.log(result);
    res.send(result);
};

exports.findChallengeByNo = async (req, res, next) => {

    const challengeNo = req.params.challengeNo;
    
    const result = await ChallengeService.findChallengeByNo(challengeNo);
    return res.send(
        {
            result: result,
            url: 'http://localhost:3000'
        }
    );
}

exports.findByCategoryNo = async (req, res, next) => {

    const categoryNo = req.params.categoryNo;
    
    const results = await ChallengeService.findByCategoryNo(categoryNo);

    res.send(results);
};