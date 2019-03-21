import { TrackService } from './tracks.service';
import { of } from 'rxjs';
import { Track } from './track';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

const A = {};

describe('TrackService', () => {
  let trackService;
  let initialTracks = [];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TrackService,
        {
          provide: HttpClient,
          useValue: {
            get: () => of(initialTracks)
          }
        }
      ]
    });
    trackService = TestBed.get(TrackService);
  });

  it('returns an empty list, if no tracks are given', () => {
    initialTracks = [];
    const foundTracks = trackService.getTracksAndFilterByArtist('nirvana');

    foundTracks.subscribe(tracks => expect(tracks.length).toBe(0));
  });
  it('filters the get-results based on artist', () => {
    initialTracks = [{ artist: 'Nirvana', title: 'Smell' }];
    const foundTracks = trackService.getTracksAndFilterByArtist('Nirvana');

    foundTracks.subscribe(tracks => {
      expect(tracks.length).toBe(1);
    });
  });
});
