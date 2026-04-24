import CreatePagePlugin from '@magnolia/cli-create-page-plugin';
import CreateComponentPlugin from '@magnolia/cli-create-component-plugin';
import CreateVirtualUriPlugin from '@magnolia/cli-create-virtual-uri-plugin';
import CreateContentTypePlugin from '@magnolia/cli-create-content-type-plugin';
import CreateAppPlugin from '@magnolia/cli-create-app-plugin';
import CreateLightModulePlugin from '@magnolia/cli-create-light-module-plugin';
import StartPlugin from '@magnolia/cli-start-plugin';
export default {
	lightModule: 'webapp',
	analytics: {
		enabled: true,
		// Set to false to turn off analytics
		uuid: '11b554b1-318e-442f-9ab0-5fbd9dbe5032',
	},
	// Logger configuration
	// see: https://github.com/winstonjs/winston#logging for logging levels explanation
	logger: {
		filename: './mgnl.error.log',
		fileLevel: 'debug',
		consoleLevel: 'info',
	},
	// Here you can add plugins you want to use with MGNL CLI
	plugins: [
		new CreatePagePlugin({
			framework: '@magnolia/cli-freemarker-prototypes@3.0.0',
		}),
		new CreateComponentPlugin({
			framework: '@magnolia/cli-freemarker-prototypes@3.0.0',
		}),
		new CreateVirtualUriPlugin(),
		new CreateContentTypePlugin(),
		new CreateAppPlugin({
			lightModule: 'common',
		}),
		new CreateLightModulePlugin({}),
		new StartPlugin(),
	],
	lightModulesPath: './light-modules',
};
