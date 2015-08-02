var grunt = require('grunt');

grunt.initConfig({
	print: {
		target1: ['index.html', 'src/styles.css', 2],
		target2: 'data',
		hello: 'hello world',
		goodbye: 'say goodbye'
	},
	cssmin: {
	  target: {
	    files: {
	      'output.css': ['style1.css', 'style2.css']
	    }
	  }
	}
});

grunt.registerTask('default', 'default task description', function(){
	console.log('this is the default task');
});

grunt.registerTask('test', function() {
	console.log('hello');
})

grunt.registerTask('print', function() {
	console.log('print task');
})
// grunt.registerTask('cssmin');

// grunt.registerTask('cssmin', function() {
// cssmin: {
//   target: {
//     files: [{
//       expand: true,
//       cwd: 'release/css',
//       src: ['*.css', '!*.min.css'],
//       dest: 'release/css',
//       ext: '.min.css'
//     }]
//   }
// }
// });
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-jshint');

// grunt.registerTask('cssmin', function() {
// 	cssmin: {
// 		options: {
// 			shorthandCompacting: false,
// 			roundingPrecision: -1
// 		},
// 		target: {
// 			files: {
// 				'output.css': ['style1.css', 'style2.css']
// 			}
// 		}
// 	}

// });
// grunt.registerTask('hello', 'say hello', function(name){
// 	if(!name || !name.length)
// 		grunt.warn('the errors can say whatever you want!');

// 	console.log('hello ' + name);
// });

// grunt.registerTask('mytask', 'description', function(){

// 	console.log('this is my task');
// });

// grunt.registerTask('default', ['hello:alex', 'mytask', 'default']);


// grunt.registerMultiTask('print', 'print targets', function() {
// 	grunt.log.writeln(this.target + ': ' + this.data);
// })

//*************************************************************/




// module.exports = function(grunt){
//   grunt.config.init({
//     concat: {
//       options: {
//         dest: 'tmp',
//         templates: ['templates/header.html', 'templates/footer.html'],
//         javascripts: ['javascripts/*.js'],
//         stylesheets: ['stylesheets']
//       }
//     }
//   });

//   var recursiveConcat = function(source, result){
//     grunt.file.expand(source).forEach(function(file){
//       if(grunt.file.isDir(file)){
//         grunt.file.recurse(file, function(f){
//           result = recursiveConcat(f, result);
//         });
//       } else {
//         grunt.log.writeln('Concatenating ' + file + ' to other ' + result.length + ' characters.');
//         result += grunt.file.read(file);
//       }
//     });
//     return result;
//   };

//   grunt.registerTask('concat', 'concatenates files', function(type){
//     grunt.config.requires('concat.options.' + type); // fail the task if this propary is missing.
//     grunt.config.requires('concat.options.dest');

//     var files = grunt.config.get('concat.options.' + type),
//       dest = grunt.config.get('concat.options.dest'),
//       concatenated = recursiveConcat(files, '');

//     grunt.log.writeln('Writing ' + concatenated.length + ' chars to ' + 'tmp/' + type);
//     grunt.file.write(dest + '/' + type, concatenated);
//   });

//   grunt.registerTask('concatAll', ['concat:templates', 'concat:javascripts', 'concat:stylesheets']);
//   grunt.registerTask('default', ['concatAll']);



