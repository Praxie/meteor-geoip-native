# Node GeoIP Native

This package is a lightning-fast, native JavaScript geoip lookup built on [MaxMind](http://www.maxmind.com/)'s free country database.

It is non-blocking and operates without any IO after initially loading the data into memory.

Results are 4 - 5 times faster than [geoip-lite](https://github.com/bluesmoon/node-geoip) with the caveat that it takes 2 or 3 times longer to initialize and uses 60 or 70 megabytes memory.

This is used in production at [Playtomic](https://playtomic.com/) up to about 20,000 times a second.

Benchmarks on my 2011 Macbook Air whilst running lots of software.  The test took the middle 10 results from 20 iterations and averaged them.  The APIs are interchangeable so tests  were identical.

	geoip-native:	average: 1540.3ms / million lookups
	geoip-lite: 	average: 8375.3ms / million lookups

Comes with the [standard CSV database by MaxMind](http://www.maxmind.com/app/geolite) which may require updating.

## Examples
        if (Meteor.isServer) {
	  var ip = "123.123.123.123";
	  GeoIP.lookup(ip);
	  console.log("country: " + ip.name + " / " + ip.code);

	  // in practice you'd want:
	  // ip = request.headers["x-forwarded-for"] || request.connection.remoteAddress,
	}

### License
Copyright [Playtomic Inc](https://playtomic.com), 2012.  Licensed under the MIT license.  Certain portions may come from 3rd parties and carry their own licensing terms and are referenced where applicable.

This product includes GeoLite data created by MaxMind, available from http://www.maxmind.com
