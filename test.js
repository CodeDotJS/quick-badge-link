import childProcess from 'child_process';
import test from 'ava';

test.cb('regular', t => {
	const cp = childProcess.spawn('./cli.js', {stdio: 'inherit'});

	cp.on('error', t.ifError);

	cp.on('close', code => {
		t.is(code, 1);
		t.end();
	});
});

test.cb('badge', t => {
	const cp = childProcess.spawn('./cli.js', ['build', 'passing', 'green'], {stdio: 'inherit'});

	cp.on('error', t.ifError);

	cp.on('close', code => {
		t.is(code, 0);
		t.end();
	});
});
