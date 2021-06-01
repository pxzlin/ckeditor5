/*
 * @Author: your name
 * @Date: 2021-03-26 11:30:23
 * @LastEditTime: 2021-06-01 18:00:04
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ckeditor5_build_my\packages\ckeditor5-build-classic\plugin\ckeditor5-video\src\video\videoinsertcommand.js
 */
import Command from '@ckeditor/ckeditor5-core/src/command';
import { insertVideo, isVideoAllowed } from './utils';

export default class VideoInsertCommand extends Command {
	refresh() {
		this.isEnabled = isVideoAllowed(this.editor.model);
	}

	execute(options) {
		const model = this.editor.model;

		model.change(writer => {
			const sources = Array.isArray(options.source) ? options.source : [options.source];

			for (const src of sources) {
				insertVideo(writer, model, { src, controls: 'controls', controlsList: 'nodownload' });
			}
		});
	}
}
