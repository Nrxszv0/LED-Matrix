#include <FastLED.h>

#define NUM_LEDS 42
#define LED_PIN 3

CRGB leds[NUM_LEDS];
void setup() {
  // put your setup code here, to run once:
  FastLED.addLeds<WS2811, LED_PIN, BRG>(leds, NUM_LEDS);
  FastLED.setBrightness(50);
}

void loop() {
  leds[0] = 0x9b76a6;
  FastLED.show();

}
