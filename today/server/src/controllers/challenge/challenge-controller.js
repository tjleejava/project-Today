const HttpStatus = require('http-status');
const uuid = require('react-uuid');
const ChallengeService = require('../../services/challenge/challenge-service');
const RegistChallengeDTO = require('../../dto/challenge/challenge-regist-dto');
const { request } = require('express');

exports.findChallenges = async (req, res, next) => {

    const results = await ChallengeService.findChallenges(JSON.parse(req.query.pageInfo));

    res.send(results);
};

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

    const result = await ChallengeService.registChallenge(req.body);

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

    const result = await ChallengeService.checkChallengeAuthByMemberNo(JSON.parse(req.query.authInfo));

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

exports.participateChallenge = async (req, res) => {
    console.log(req.body);
    const data = req.body;

    const result = await ChallengeService.participateChallenge(data);
    console.log('controller 받은 result');
    console.log(result);
    return res.send(result);

}

exports.removeChallenge = async (req, res, next) => {
    const removeInfo = JSON.parse(req.query.removeInfo);

    const result = await ChallengeService.removeChallenge(removeInfo);

    res.send(result);
};

exports.secessionChallenge = async (req, res, next) => {
    
    const result = await ChallengeService.secessionChallenge(req.body);

    res.send(result);
};

exports.registInquiry = async (req, res) => {
    console.log(req.body);
    console.log('실행되니');
    const result = await ChallengeService.registInquiry(req.body);
    res.send(result);
}

exports.findChallengeInquiries = async (req, res) => {
    console.log(req.query.challengeNo);
    const challengeNo= req.query.challengeNo;
    const result = await ChallengeService.findInquiries(challengeNo);
    
    if(result.status == 200) {
        res.send(result);
    } else {
        res.send(result);
    }
    
}