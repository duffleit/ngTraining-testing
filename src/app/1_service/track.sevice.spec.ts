import { TestBed } from '@angular/core/testing';
import { TrackService } from './tracks.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

const mockedHTtpService = {
  get: () => of([])
};

describe('TrackService', () => {
  let http: HttpClient;
  let service: TrackService;

  beforeEach(() => {
    const testbed = TestBed.configureTestingModule({
      providers: [
        TrackService,
        {
          provide: HttpClient,
          useValue: mockedHTtpService
        }
      ]
    });

    http = testbed.get(HttpClient);
    service = testbed.get(TrackService);
  });

  it('returns an empty list, if no tracks are given', () => {
    service
      .getTracksAndFilterByArtist('Nirvana')
      .subscribe(tracks => expect(tracks.length).toBe(0));
  }),
    it('filters the get-results based on artist', () => {
      http.get = () =>
        of([
          { title: 'Smells like teen spirit', artist: 'Nirvana' },
          { title: 'We are the champions', artist: 'Queen' }
        ]) as any;

      service
        .getTracksAndFilterByArtist('Nirvana')
        .subscribe(tracks => expect(tracks.length).toBe(1));
    });
});
