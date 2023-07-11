import Video from 'react-native-video';

const VideoAttachments = ({width, attachments}) => {
  return (
    <>
      {attachments.map(attachment => (
        <Video
          key={attachment.id}
          source={{
            uri: attachment.uri,
          }}
          shouldPlay={false}
          style={{
            width,
            height: (attachment.height * width) / attachment.width,
          }}
          resizeMode="contain"
          controls={true}
          paused={true}
          repeat={false}
          // paper
        />
      ))}
    </>
  );
};

export default VideoAttachments;
