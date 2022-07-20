class AttachmentDTO{

  fileNo;
  fileTypeNo;
  originalName;
  savedName;
  savedPath;
  challengeNo;

  constructor(data) {
    this.fileNo = data.FILE_NO;
    this.fileTypeNo = data.FILE_TYPE_NO;
    this.originalName = data.ORIGINAL_NAME;
    this.savedName = data.SAVED_NAME;
    this.savedPath = data.SAVED_PATH;
    this.challengeNo = data.CHALLENGE_NO;
  }
}

module.exports = AttachmentDTO;