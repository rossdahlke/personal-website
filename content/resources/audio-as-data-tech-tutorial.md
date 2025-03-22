---
title: "Audio-as-Data Tech Tutorial"
date: "2023-10-31"
description: "A tutorial on audio processing using Python libraries like librosa and deep learning techniques for audio as data analysis."
author: "Ross Dahlke"
---

# Audio-as-Data Tech Tutorial

In this tutorial, we will be covering some of the basics of audio analysis for social science research.

There will be two main topics covered in this tutorial:
1. Computational Phonology
2. Deep Learning

## I. Data prep

First, we're going to prepare our data and import some packages.

```python
# Install required packages
!pip install librosa
!pip install pydub
!pip install transformers
!pip install webrtcvad

# Import necessary libraries
import librosa
import librosa.display
import numpy as np
import matplotlib.pyplot as plt
from pydub import AudioSegment
from IPython.display import Audio, display
```

Make sure you have the tech-tutorial-audio-as-data folder properly placed in your Google Drive.

In this tutorial, we are going to be using audio from The Alex Jones Show Dataset. To play around with the basics of audio analysis, we're going to start by looking at one specific radio episode.

Each episode is 4 hours long. To reduce runtime, we're going to subset down to only the first 10 minutes of the show.

```python
from google.colab import drive

# Mount Google Drive
drive.mount('/content/drive')

# Load and process audio file
audio_path = '/content/drive/MyDrive/tech-tutorial-audio-as-data/mp3s/20221106_Sun_Alex.mp3'
audio_data, sr = librosa.load(audio_path)

# Convert audio data to an AudioSegment object
audio_segment = AudioSegment.from_file(audio_path)

# Set the desired duration (in milliseconds)
desired_duration = 10 * 60 * 1000  # 10 minutes

# Trim the audio segment to the desired duration
trimmed_audio_segment = audio_segment[:desired_duration]

# Export the trimmed audio segment as a new audio file
trimmed_audio_path = '/content/drive/MyDrive/tech-tutorial-audio-as-data/trimmed_mp3s/trimmed_audio.mp3'
trimmed_audio_segment.export(trimmed_audio_path, format='mp3')

# Load the trimmed audio file with librosa
trimmed_audio_data, sr_trimmed = librosa.load(trimmed_audio_path)
```

## II. Introduction to Computational Phonology with librosa

librosa is a Python library for audio and signal processing. It provides a wide variety of functionality for reading in audio data and extracting audio features.

First, we will go over some of the features that can be extracted. Then, we will cover how these features can be used as a part of statistical inference.

### A. Representations of Audio Data
One of the most typical ways that audio data is visualized, for example in audio editing software, is via a waveform. The waveform of an audio signal is a graphical representation that shows how the amplitude of the signal varies over time. It provides a visual depiction of the changes in air pressure or voltage that correspond to the sound waves captured by a microphone or other recording device.

In a waveform plot, the horizontal axis represents time, typically measured in seconds, while the vertical axis represents the amplitude or intensity of the audio signal. The waveform shows the pattern of oscillations or vibrations of the sound wave as it propagates through time.

The shape of the waveform provides valuable information about the characteristics of the audio signal. For example, the overall shape can reveal the presence of specific audio features such as speech, music, or noise. The amplitude of the waveform indicates the loudness or intensity of the sound at each point in time, with higher peaks indicating louder sections and lower peaks indicating quieter sections.
```python

plt.figure(figsize=(14, 5))
librosa.display.waveshow(trimmed_audio_data, sr=sr)
plt.xlabel('Time (s)')
plt.ylabel('Amplitude')
plt.title('Waveform')
plt.show()
```

Spectrograms are a visual representation of the frequencies present in an audio signal over time. It is computed by applying the Short-Time Fourier Transform (STFT) to the audio data, which involves dividing the signal into short overlapping segments and calculating the Fourier Transform for each segment. The resulting spectrogram represents the amplitude of different frequencies as a function of time.

To enhance the interpretation of the spectrogram, we convert the amplitude values to the decibel scale using the `librosa.amplitude_to_db` function. This conversion allows us to better visualize the dynamic range of the spectrogram, with higher values indicating higher amplitudes and lower values indicating lower amplitudes. The resulting spectrogram_db provides a more perceptually meaningful representation of the audio signal's frequency content.

```python
# Compute spectrogram
spectrogram = librosa.stft(trimmed_audio_data)
spectrogram_db = librosa.amplitude_to_db(np.abs(spectrogram))

# Visualize the spectrogram
plt.figure(figsize=(10, 6))
librosa.display.specshow(spectrogram_db, sr=sr, x_axis='time', y_axis='log')
plt.colorbar(format='%+2.0f dB')
plt.title('Spectrogram')
plt.xlabel('Time (s)')
plt.ylabel('Frequency (Hz)')
plt.show()
```

The spectrogram is represented as a 2D plot where the x-axis represents time and the y-axis represents frequency. Each point in the plot corresponds to the magnitude of a particular frequency component at a specific time. The color of each point represents the magnitude of the frequency component, with different colors indicating different amplitudes.

To interpret the spectrogram plot:

- Time axis: The x-axis represents time in seconds. It shows the duration of the audio signal, with the leftmost point corresponding to the start of the audio and the rightmost point corresponding to the end of the audio.
- Frequency axis: The y-axis represents frequency in Hertz (Hz). It shows the range of frequencies present in the audio signal. The lowest frequencies are at the bottom, and the highest frequencies are at the top.
- Color intensity: The color of each point in the plot represents the magnitude or amplitude of the corresponding frequency component. Brighter or more intense colors indicate higher amplitudes, while darker or less intense colors indicate lower amplitudes.
- Colorbar: The colorbar on the right side of the plot provides a reference scale for interpreting the color intensity. It indicates the corresponding decibel (dB) values of the color intensities in the plot.

Similarly, we can create a mel-spectrogram, which is a variant of the spectrogram that uses the Mel scale to represent the frequency axis. The Mel scale is a perceptual scale that emphasizes differences in lower frequencies and de-emphasizes differences in higher frequencies, more closely aligning with how humans perceive sound.

```python
# Compute mel-spectrogram
mel_spectrogram = librosa.feature.melspectrogram(y=trimmed_audio_data, sr=sr)
mel_spectrogram_db = librosa.amplitude_to_db(mel_spectrogram, ref=np.max)

# Visualize the spectrogram
plt.figure(figsize=(10, 6))
librosa.display.specshow(mel_spectrogram_db, sr=sr, x_axis='time', y_axis='log')
plt.colorbar(format='%+2.0f dB')
plt.title('Mel-Spectrogram')
plt.xlabel('Time (s)')
plt.ylabel('Frequency (Hz)')
plt.show()
```

### B. Audio Feature Extraction

There are other, more specific features that we may be interested in extracting from audio. Here are some examples:

#### Chroma Features

Chroma is most often used in music analysis and is basically the musical note that a tone is closest to. When we listen to music, we can perceive different musical notes or pitches that make up the melody or harmony of a song. The chroma feature aims to capture and represent these pitch characteristics in a structured way.

Think of chroma as a way to describe the "color" of music. Just as different colors create distinct visual experiences, different pitches create unique musical experiences. The chroma feature takes these pitches and organizes them into a 12-element vector, representing the 12 different pitch classes in an octave (C, C#, D, D#, E, F, F#, G, G#, A, A#, B).

Often, things like emotion or speaker detection are related to the chroma of the speaker.

```python
# Extract and visualize chroma features
chroma = librosa.feature.chroma_stft(y=trimmed_audio_data, sr=sr)

plt.figure(figsize=(10, 6))
librosa.display.specshow(chroma, sr=sr, x_axis='time', y_axis='chroma', cmap='coolwarm')
plt.colorbar()
plt.title('Chroma Feature')
plt.xlabel('Time (s)')
plt.ylabel('Pitch Class')
plt.show()
```

#### Tempo Analysis

```python
# Define the boundaries of the chunks (in seconds)
chunk_duration = 10
total_duration = 600  # 10 minutes

chunk_boundaries = np.arange(0, total_duration, chunk_duration)

# Initialize an empty list to store the tempos for each chunk
chunk_tempos = []

# Process each chunk
for i in range(len(chunk_boundaries) - 1):
    start_time = chunk_boundaries[i]
    end_time = chunk_boundaries[i + 1]

    # Extract the audio data for the current chunk
    chunk_audio = trimmed_audio_data[int(start_time * sr):int(end_time * sr)]

    # Calculate the tempo for the current chunk
    tempo, _ = librosa.beat.beat_track(y=chunk_audio, sr=sr, start_bpm=120)

    # Store the tempo in the list
    chunk_tempos.append(tempo)

# Plot the tempo curve
plt.figure(figsize=(10, 4))
plt.plot(chunk_boundaries[:-1], chunk_tempos, marker='o', linestyle='-', linewidth=1)
plt.title('Tempo Curve')
plt.xlabel('Time (s)')
plt.ylabel('Tempo (BPM)')
plt.show()
```

#### Pitch Analysis

```python
# Extract pitch from audio data
pitch, _ = librosa.piptrack(y=trimmed_audio_data, sr=sr)

# Plot pitch
pitch_mean = np.mean(pitch, axis=0)

# Plot tone analysis
plt.figure(figsize=(14, 5))
plt.xlabel('Time (frames)')
plt.ylabel('Value')
plt.title('Pitch')
plt.legend()
plt.show()
```

#### Intensity Analysis

```python
# Extract intensity from audio data
intensity = librosa.feature.rms(y=trimmed_audio_data)

# Plot intensity contour
plt.figure(figsize=(14, 5))
plt.plot(intensity[0])
plt.xlabel('Time (frames)')
plt.ylabel('Intensity')
plt.title('Intensity Contour')
plt.show()
```

#### MFCC Analysis

MFCCs (Mel Frequency Cepstral Coefficients) are a set of features or measurements that represent the characteristics of the sound or speech.

When we speak or produce sound, the characteristics of the sound wave can be analyzed and represented by these coefficients. MFCCs capture information related to the frequency content of the sound over time. They are commonly used in audio and speech processing tasks to analyze and recognize different sounds or phonemes.

There are 13 MFCC coefficients, each representing a different feature of audio:

- MFCC 1: Represents the overall energy or power of the audio signal.
- MFCC 2-13: These coefficients capture information about the shape of the spectral envelope, emphasizing different frequency bands. They are often referred to as "mel-frequency cepstral coefficients" because they are calculated based on the mel-frequency scale, which approximates the human auditory system's perception of pitch.
  - MFCC 2: Related to the spectral shape and represents lower frequency components.
  - MFCC 3: Captures information about transitions between adjacent spectral bands.
  - MFCC 4-7: Represent various aspects of spectral shape and envelope.
  - MFCC 8-13: Represent higher frequency components and provide details about the fine structure of the audio signal.

```python
mfccs = librosa.feature.mfcc(y=trimmed_audio_data, sr=sr)

# Plot MFCCs
plt.figure(figsize=(10, 4))
librosa.display.specshow(mfccs, x_axis='time')
plt.colorbar(format='%+2.0f dB')
plt.title('MFCCs')
plt.xlabel('Time')
plt.ylabel('MFCC Coefficients')
plt.show()
```

#### Spectral Contrast

```python
spectral_contrast = librosa.feature.spectral_contrast(y=trimmed_audio_data, sr=sr)

# Plot Spectral Contrast
plt.figure(figsize=(10, 4))
librosa.display.specshow(spectral_contrast, x_axis='time')
plt.colorbar()
plt.title('Spectral Contrast')
plt.xlabel('Time')
plt.ylabel('Spectral Contrast Bands')
plt.show()
```

#### Zero Crossing Rate

```python
zero_crossing_rate = librosa.feature.zero_crossing_rate(y=trimmed_audio_data)

plt.figure(figsize=(10, 4))
plt.plot(trimmed_audio_data, alpha=0.5)
plt.plot(zero_crossing_rate[0], color='r')
plt.title('Zero Crossing Rate')
plt.xlabel('Time')
plt.ylabel('Amplitude')
plt.show()
```

### C. Statistical Analysis

#### Intra-audio Analysis

These features can be used to understand fluctuations within an audio file. For example, in the code below, we are extracting various audio features over time windows (hop_length).

I am creating a dummy outcome variable Y that may represent some value that is fluctuating over the course of the audio, for example, the number of likes an audio stream is receiving.

```python
from sklearn.linear_model import LinearRegression
import pandas as pd
import statsmodels.api as sm

window_size = 0.1  # Adjust this value as per your requirement
hop_length = int(sr * window_size)

# Extract audio features with temporal alignment
spectrogram = np.abs(librosa.stft(trimmed_audio_data, hop_length=hop_length))
chroma = librosa.feature.chroma_stft(y=trimmed_audio_data, sr=sr, hop_length=hop_length)
mfcc = librosa.feature.mfcc(y=trimmed_audio_data, sr=sr, hop_length=hop_length)
zero_crossing_rate = librosa.feature.zero_crossing_rate(trimmed_audio_data, hop_length=hop_length)
spectral_rolloff = librosa.feature.spectral_rolloff(y=trimmed_audio_data, sr=sr, hop_length=hop_length)
intensity = librosa.feature.rms(y=trimmed_audio_data, frame_length=hop_length, hop_length=hop_length)

# Take the minimum length among all feature matrices
min_length = min(spectrogram.shape[1], chroma.shape[1], mfcc.shape[1], zero_crossing_rate.shape[1],
                 spectral_rolloff.shape[1], intensity.shape[1])

# Create DataFrame and perform regression
df = pd.DataFrame({
    'Spectrogram': spectrogram[0],
    'Chroma 1': chroma[0],
    # ... [rest of the features] ...
})

# Create dummy target variable
y = np.random.randint(low=0, high=1000, size=df.shape[0]) * np.random.uniform(low=0.5, high=2.0, size=df.shape[0])

# Perform linear regression
X = sm.add_constant(df)
regression_model = sm.OLS(y, X)
regression_results = regression_model.fit()

print(regression_results.summary())
```

#### Inter-Audio Analysis

We can also summarize these features down into single numbers that represent each episode. For example, in this analysis, I am seeing if The Alex Jones Show's audio features are different before or after the show was deplatformed.

```python
import glob
import librosa
import numpy as np
import pandas as pd
import statsmodels.api as sm

# Process audio files and extract features
folder_path = '/content/drive/MyDrive/tech-tutorial-audio-as-data/mp3s'
file_pattern = '/content/drive/MyDrive/tech-tutorial-audio-as-data/mp3s/*.mp3'
mp3_files = glob.glob(file_pattern)

# ... [rest of the analysis code] ...

print(regression_results.summary())
```

## III. Deep Learning Applications

One of the key advantages of deep learning for audio processing is its ability to learn hierarchical representations directly from raw audio data. Instead of relying on handcrafted features, deep learning models can automatically learn intricate patterns and representations by leveraging the power of neural networks.

### Speech Recognition Example

```python
import torch
from transformers import Wav2Vec2ForCTC, Wav2Vec2Tokenizer

# Load the pre-trained Wav2Vec model
model = Wav2Vec2ForCTC.from_pretrained('facebook/wav2vec2-base-960h')
tokenizer = Wav2Vec2Tokenizer.from_pretrained('facebook/wav2vec2-base-960h')

# Process audio and get transcription
duration = 20
max_samples = int(duration * sr)
trimmed_audio_data = trimmed_audio_data[:max_samples]

inputs = tokenizer(trimmed_audio_data, return_tensors='pt', padding=True)
outputs = model(inputs.input_values)
predicted_ids = torch.argmax(outputs.logits, dim=-1)
transcriptions = tokenizer.batch_decode(predicted_ids)

print(transcriptions)
```

### Neural Network Training Example

```python
# Split the data into train and test sets
X_train, X_test, y_train, y_test = train_test_split(embeddings, y, test_size=0.2, random_state=1)

# Define the neural network
class NeuralNetwork(nn.Module):
    def __init__(self, input_size, hidden_size, num_classes):
        super(NeuralNetwork, self).__init__()
        self.fc1 = nn.Linear(input_size, hidden_size)
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(hidden_size, num_classes)

    def forward(self, x):
        out = self.fc1(x)
        out = self.relu(out)
        out = self.fc2(out)
        return out

# Train the model
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = NeuralNetwork(input_size, hidden_size, num_classes).to(device)

# ... [training loop code] ...

print("Final Accuracy:", accuracy)
```

### Comparison with Traditional Methods

Just for fun, let's compare this accuracy to a regression using the embeddings.

```python
from sklearn.linear_model import LogisticRegression

# Train and evaluate logistic regression
lr_model = LogisticRegression()
lr_model.fit(X_train, y_train)
y_pred = lr_model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print("Accuracy:", accuracy)
```

It looks like our model is just reverting to a naive classifier. Oh well, what can you expect on only 60 seconds of data?!