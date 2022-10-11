#import "React/RCTBridgeModule.h"

@import AVFoundation;

@interface SpeechSynthesizer : NSObject <RCTBridgeModule, AVSpeechSynthesizerDelegate>
@property (nonatomic, strong) AVSpeechSynthesizer *synthesizer;
@end
